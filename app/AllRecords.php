<?php

namespace app;

class AllRecords
{
    private $db;

    public function __construct($db)
    {
        $this->db = $db;
    }

    public function getAllRecords()
    {
        return mysqli_query($this->db, "SELECT * FROM `list`");
    }
}