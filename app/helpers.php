<?php

if (!function_exists('shortName')) {
    function shortName($name, $lgpd = false)
    {
        $split_name = explode(" ", $name);
        $count = (count($split_name) - 1);
        $qtdL = 3;
        if ($lgpd) {
            $count = count($split_name);
            $qtdL = 1;
        }

        if (count($split_name) > 2) {
            for ($i = 1; $count > $i; $i++) {
                if (strlen($split_name[$i]) > $qtdL) {
                    $split_name[$i] = substr($split_name[$i], 0, 1) . ".";
                }
            }
        }

        return implode(" ", $split_name);
    }
}

if (!function_exists('getName')) {
    function getName($name, $type = 1)
    {
        $splitName = explode(' ', $name, 3);

        $first_name = "{$splitName[0]} {$splitName[1]}";
        $last_name = !empty($splitName[2]) ? $splitName[1] : '';

        return (($type == 1) ? $first_name : (($type == 2) ? $last_name : $name));
    }
}