<?php


namespace App\Services;


use App\Helpers\Cryptographie;
use ParagonIE\Halite\Symmetric\Crypto;
use ParagonIE\Halite\Symmetric\EncryptionKey;
use ParagonIE\HiddenString\HiddenString;
use Symfony\Component\Serializer\Exception\ExceptionInterface;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\GetSetMethodNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class Normalizer
{
    /**
     * @var Serializer
     */
    private $serializer;

    public function __construct(Cryptographie $cryptographie)
    {
        // tous paramètres du callback sont facultatifs
        $dateCallback = function ($innerObject, $outerObject, string $attributeName, string $format = null, array $context = []) {
            return $innerObject instanceof \DateTime ? $innerObject->format(\DateTime::ISO8601) : '';
        };

        $textesDecrypt = function($textes) use ($cryptographie)
        {
           return $cryptographie->decrypt($textes);
        };

        $defaultContext = [
            AbstractNormalizer::CALLBACKS => [
                'createdAt' => $dateCallback,
                'deletedAt' => $dateCallback,
                'updatedAt' => $dateCallback,
                'textes'    => $textesDecrypt
            ],
        ];
        $normalizer = new GetSetMethodNormalizer(null, null, null, null, null, $defaultContext);
        $this->serializer = new Serializer([$normalizer]);
    }

    public function getNormalizeData($object, $attributes)
    {
        try {
            $normalizedData = $this->serializer->normalize($object, null, [
                AbstractNormalizer::ATTRIBUTES => $attributes
            ]);
            return array_merge($normalizedData, ['error' => false]);

        } catch (ExceptionInterface $e) {
            return [
                'error' => true,
                'message' => $e->getMessage(),
                'traces' => $e->getTrace(),
                'code' => $e->getCode()
            ];
        }
    }
}