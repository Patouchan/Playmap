<?php

namespace App\Entity;

use App\Repository\StatRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=StatRepository::class)
 */
class Stat
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $totalDistance;

    /**
     * @ORM\Column(type="integer")
     */
    private $monthlyDistance;

    /**
     * @ORM\OneToOne(targetEntity=User::class, inversedBy="stat", cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTotalDistance(): ?int
    {
        return $this->totalDistance;
    }

    public function setTotalDistance(int $totalDistance): self
    {
        $this->totalDistance = $totalDistance;

        return $this;
    }

    public function getMonthlyDistance(): ?int
    {
        return $this->monthlyDistance;
    }

    public function setMonthlyDistance(int $monthlyDistance): self
    {
        $this->monthlyDistance = $monthlyDistance;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(User $user): self
    {
        $this->user = $user;

        return $this;
    }
}
