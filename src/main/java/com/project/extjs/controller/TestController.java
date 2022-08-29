package com.project.extjs.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class TestController {

    @Autowired
    private JdbcTemplate sql;

    @RequestMapping(value = "/testAPI2")
    public Map<String, Object> testAPI(){
            Map<String, Object> result = new HashMap<String, Object>();
            result.put("key1","first");
            result.put("key2","second");
            return result;
        }

    @RequestMapping(value="/testAPI")
    public Map<String,Object> testAPI2() {
        String query = "SELECT test_seq, test_name, test_id FROM test";
        Map<String,Object> result = new HashMap<String,Object>();
        result.put("data", sql.queryForList(query));
        return result;
    }
}
