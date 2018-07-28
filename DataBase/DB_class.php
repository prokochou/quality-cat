<?php
class DB 
{
    var $_dbConn = 0;
    var $_queryResource = 0;
    
    function DB()
    {
        // do nothing
    }

    function connect_db($host, $user, $password, $dbname)
    {
        $dbConn = mysqli_connect($host, $user, $password);
        if (! $dbConn)
            die ("MySQL Connect Error");
        if (! mysqli_select_db($dbConn, $dbname))
            die ("MySQL Select DB Error");
        $this->_dbConn = $dbConn;
        echo "DB connected! <br>";
        return true;
    }
    
    function query($sql)
    {
        if (! $queryResource = mysqli_query($this->_dbConn, $sql))
            die ("MySQL Query Error");
        $this->_queryResource = $queryResource;
        return $queryResource;        
    }
    
    /** Get array return by MySQL */
    function fetch_array()
    {
        return mysqli_fetch_array($this->_queryResource);
    }
    
    function get_num_rows()
    {
        return mysqli_num_rows($this->_queryResource);
    }

    /** Get the cuurent id */    
    function get_insert_id()
    {
        return mysqli_insert_id($this->_dbConn);
    } 
    
}
?>