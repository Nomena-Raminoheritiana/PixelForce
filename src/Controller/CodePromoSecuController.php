<?php

namespace App\Controller;

use App\Entity\CodePromoSecu;
use App\Form\CodePromoSecuType;
use App\Repository\CodePromoSecuRepository;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/code/promo/secu')]
class CodePromoSecuController extends AbstractController
{
    public function __construct()
    {
    }

    #[Route('/', name: 'app_code_promo_secu_index', methods: ['GET'])]
    public function index(PaginatorInterface $paginator,CodePromoSecuRepository $codePromoSecuRepository, Request $request): Response
    {
        $codePromos = $paginator->paginate(
            $codePromoSecuRepository->createQueryBuilder('c')->getQuery(),
            $request->query->getInt('page', 1),
            20
        );
        return $this->render('code_promo_secu/index.html.twig', [
            'code_promo_secus' => $codePromos,
        ]);
    }

    #[Route('/new', name: 'app_code_promo_secu_new', methods: ['GET', 'POST'])]
    public function new(Request $request, CodePromoSecuRepository $codePromoSecuRepository): Response
    {
        $codePromoSecu = new CodePromoSecu();
        $form = $this->createForm(CodePromoSecuType::class, $codePromoSecu);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $codePromoSecuRepository->add($codePromoSecu, true);
            $this->addFlash('success', 'Code Promo ajouté avec succès');

            return $this->redirectToRoute('app_code_promo_secu_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('code_promo_secu/new.html.twig', [
            'code_promo_secu' => $codePromoSecu,
            'form' => $form,
        ]);
    }


    #[Route('/{id}/edit', name: 'app_code_promo_secu_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, CodePromoSecu $codePromoSecu, CodePromoSecuRepository $codePromoSecuRepository): Response
    {
        $form = $this->createForm(CodePromoSecuType::class, $codePromoSecu);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $codePromoSecuRepository->add($codePromoSecu, true);
            $this->addFlash('success', 'Code Promo édité avec succès');
            return $this->redirectToRoute('app_code_promo_secu_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('code_promo_secu/edit.html.twig', [
            'code_promo_secu' => $codePromoSecu,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_code_promo_secu_delete', methods: ['POST'])]
    public function delete(Request $request, CodePromoSecu $codePromoSecu, CodePromoSecuRepository $codePromoSecuRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$codePromoSecu->getId(), $request->request->get('_token'))) {
            $codePromoSecuRepository->remove($codePromoSecu, true);
            $this->addFlash('success', 'Code Promo supprimé');
        }

        return $this->redirectToRoute('app_code_promo_secu_index', [], Response::HTTP_SEE_OTHER);
    }
}
