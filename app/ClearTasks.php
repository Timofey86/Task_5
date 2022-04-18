<?php

namespace app;

class ClearTasks
{
    private $db;

    public function __construct($db)
    {
        $this->db = $db;
    }

    public function clearTasks()
    {
        return mysqli_query($this->db, "DELETE FROM `list`");
    }
}