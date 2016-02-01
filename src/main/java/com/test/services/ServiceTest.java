package com.test.services;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

/**
 * Created by olivier on 18/11/15.
 */
@Path("/test")
public class ServiceTest {


    @GET
    @Path("/cal")
    @Produces(MediaType.TEXT_HTML)
    public String doOperationService(@QueryParam("exp1") int exp1, @QueryParam("exp2") int exp2){
        int res = exp1 + exp2;
        System.out.println(res);
        return "<h1>Si un résultat s'affiche, la config est OK</h1><br /><h1>résultat: " + res + "</h1>";
        //return res;
    }

}
