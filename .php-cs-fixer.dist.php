<?php

$finder = PhpCsFixer\Finder::create()
    ->in(__DIR__)
    ->exclude('var')
    ->name('*.php')
;
$config = new PhpCsFixer\Config;
return $config
    ->setRules([
        '@Symfony' => true,
        'array_syntax' => ['syntax' => 'short'],
        'array_indentation' => true,
        'no_trailing_whitespace' => true,
        'no_trailing_whitespace_in_comment' => true,
        'no_whitespace_in_blank_line' => true,
        'ordered_imports' => [
            'imports_order' => [
                'class',
                'function',
                'const',
            ],
            'sort_algorithm' => 'alpha',
        ],
        'align_multiline_comment' => [
            'comment_type' => 'phpdocs_only',
        ],
        'binary_operator_spaces' => false,
        'yoda_style' =>  false,
        'phpdoc_annotation_without_dot' => true,
        'no_useless_else' => true,
        'no_useless_return' => true,
        'no_superfluous_phpdoc_tags' => false,
        'line_ending' => false,
        'ternary_to_null_coalescing' => true,
        'no_spaces_after_function_name' => true,
        'increment_style' => ['style' => 'post']
    ])
    ->setFinder($finder)
    ->setLineEnding("\r\n")

    ;
