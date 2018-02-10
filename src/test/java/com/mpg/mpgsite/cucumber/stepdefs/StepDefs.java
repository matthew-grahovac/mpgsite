package com.mpg.mpgsite.cucumber.stepdefs;

import com.mpg.mpgsite.MpgsiteApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = MpgsiteApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
