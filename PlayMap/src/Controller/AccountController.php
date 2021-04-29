<?php

namespace App\Controller;

use App\Entity\User;

use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AccountController extends AbstractController
{

  public function account($id)
  {
    $user = $this->getDoctrine()->getRepository(User::class)->find($id);

    $grade = "";
    if ($user->getGrade() == 5) {
      $grade = "Winner dans l'âme";
    }

    return $this->render('account/accountDef.html.twig', [
      "user" => $user,
      "grade" => $grade
    ]);
  }
}
