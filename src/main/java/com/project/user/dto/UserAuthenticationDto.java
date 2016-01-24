package com.project.user.dto;

import javax.xml.bind.annotation.XmlRootElement;

/**
 * Created by olivier on 24/01/2016.
 */

@XmlRootElement
public class UserAuthenticationDto {

    private Boolean isAuthenticate;

    public Boolean getAuthenticate() {return isAuthenticate;}
    public void setAuthenticate(Boolean authenticate) {isAuthenticate = authenticate;}

}
