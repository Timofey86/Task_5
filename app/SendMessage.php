<?php

namespace app;

class SendMessage
{
    private $txt;
    private $db;

    public function __construct($txt, $db)
    {
        $this->txt = $txt;
        $this->db = $db;
    }

    public function sendToDataBase()
    {
        return mysqli_query($this->db, "INSERT INTO `list` (`id`, `txt`) VALUES (NULL, '$this->txt')");

    }

}