package com.user.services;

import javax.xml.bind.annotation.XmlRootElement;

/**
 * Created by olivier on 26/11/2015.
 */
@XmlRootElement
public class TokenUtils {

    private String token;

    public String getToken() {return token;}
    public void setToken(String token) {this.token = token;}

}
