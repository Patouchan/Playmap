<?php

namespace App\Controller;

use App\Entity\Beta;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class HomeController extends AbstractController
{


  public function index(): Response
  {
    return $this->render('home/home.html.twig');
  }





  public function beta(): Response
  {
    // return $this->render('home/index.html.twig', [
    //     'controller_name' => 'HomeController',
    // ]);

    $em = $this->getDoctrine()->getManager();

    $betas = $em->getRepository(Beta::class)->findAll();

    return $this->render('home/beta.html.twig', [
      'betas' => $betas
    ]);
  }


  public function inscription(): Response
  {
    // return $this->render('home/index.html.twig', [
    //     'controller_name' => 'HomeController',
    // ]);

    return $this->render('inscription/inscription.html.twig');
  }


  // fonction de récupération données API
  public function getDatabase()
  {

    $em = $this->getDoctrine()->getManager();
    $allBetas = $em->getRepository(Beta::class)->findAll();

    $arrayCollection = array();

    foreach ($allBetas as $item) {
      $arrayCollection[] = array(
        'id' => $item->getId(),
        'name' => $item->getName(),
        'age' => $item->getAge()
      );
    }

    return new JsonResponse($arrayCollection);
  }
}
