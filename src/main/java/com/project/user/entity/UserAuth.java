package com.project.user.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * Created by olivier on 19/12/2015.
 */
@Entity
@XmlRootElement
public class UserAuth implements java.io.Serializable{

    @Id
    private String email;
    private String password;

    public String getPassword() {return password;}
    public void setPassword(String password) {this.password = password;}

    public String getEmail() {return email;}
    public void setEmail(String email) {this.email = email;}

}
