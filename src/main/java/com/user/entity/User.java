package com.user.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * Created by olivier on 26/11/2015.
 */
@Entity
@XmlRootElement
public class User {

    @Id
    private String email;
    private String password;

    public String getPassword() {return password;}
    public void setPassword(String password) {this.password = password;}

    public String getEmail() {return email;}
    public void setEmail(String email) {this.email = email;}

}
