<?php

namespace app;

class Total_Task
{
    private $db;

    public function __construct($db)
    {
        $this->db = $db;
    }

    public function getTotalTask()
    {
        return mysqli_query($this->db, "SELECT * FROM `list`");
    }

}