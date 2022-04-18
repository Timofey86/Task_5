<?php

namespace app;

class DeleteTask
{
    private $id;
    private $db;

    public function __construct($id, $db)
    {
        $this->id = $id;
        $this->db = $db;
    }

    public function deleteTask()
    {
        return mysqli_query($this->db, "DELETE FROM `list` WHERE `list`.`id` = '$this->id'");
    }

}