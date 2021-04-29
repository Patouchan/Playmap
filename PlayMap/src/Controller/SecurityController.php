<?php

namespace App\Controller;

use App\Entity\Stat;
use App\Entity\User;

use App\Form\RegistrationType;
use App\Form\RegistrationType2;
use Symfony\Component\HttpFoundation\Request;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class SecurityController extends AbstractController
{
    
    public function index(): Response
    {
        return $this->render('security/index.html.twig', [
            'controller_name' => 'SecurityController',
        ]);
    }



    // RPR -- inscription 1
    public function registration(Request $request, UserPasswordEncoderInterface $encoder)
    {
      $user = new User();
      $form = $this->createForm(RegistrationType::class, $user);

      // dump($form);

      $form->handleRequest($request);

      if ($form->isSubmitted() && $form->isValid()) {

        $hash = $encoder->encodePassword($user, $user->getPassword());
        $user->setPassword($hash);

        // $user->setRoles(["ROLE_ADMIN", "ROLE_EXTRA"]);

        $em = $this->getDoctrine()->getManager();
        $em->persist($user);
        $em->flush();

        return $this->redirectToRoute('home');
      }

      return $this->render('security/registration.html.twig', [
        'form' => $form->createView()
      ]);
    }

    // T*T -- inscription 2
    public function inscription(Request $request, UserPasswordEncoderInterface $encoder)
    {
      $user = new User();
      $form = $this->createForm(RegistrationType2::class, $user);

      $form->handleRequest($request);

      if ($form->isSubmitted() && $form->isValid()) {

        $hash = $encoder->encodePassword($user, $user->getPassword());
        $user->setPassword($hash);

        // $user->setRoles(["ROLE_ADMIN", "ROLE_EXTRA"]);

        $user->setLastname("empty");
        $user->setFirstname("empty");
        $user->setGrade(0);
        $user->setLevel(0);

        $em = $this->getDoctrine()->getManager();
        $em->persist($user);
        $em->flush();

          // création de stat
          $stat = new Stat();
          $stat->setTotalDistance(0);
          $stat->setMonthlyDistance(0);
          $stat->setUser($user);

        $em->persist($stat);
        $em->flush();

        return $this->redirectToRoute('home');
      }

      return $this->render('inscription/inscription.html.twig', [
        'form' => $form->createView()
      ]);
    }

    
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
      
        // if ($this->getUser()) {
        //     return $this->redirectToRoute('target_path');
        // }

        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('security/login.html.twig', ['last_username' => $lastUsername, 'error' => $error]);
    }

    
    public function logout()
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }


    






}
