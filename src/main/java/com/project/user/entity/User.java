package com.project.user.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * Created by olivier on 26/11/2015.
 */
@XmlRootElement
public class User implements java.io.Serializable{

    @Id
    private String email;
    private String password;

    public String getPassword() {return password;}
    public void setPassword(String password) {this.password = password;}

    public String getEmail() {return email;}
    public void setEmail(String email) {this.email = email;}

}
