package com.rest;

import com.test.services.ServiceTest;

import javax.ws.rs.core.Application;
import java.util.HashSet;
import java.util.Set;

/**
 * Created by olivier on 18/11/15.
 */
public class MyServices extends Application {
    private Set<Object> singletons = new HashSet<Object>();

    public MyServices() {
        singletons.add(new ServiceTest());
    }

    @Override
    public Set<Object> getSingletons() {
        return singletons;
    }
}
