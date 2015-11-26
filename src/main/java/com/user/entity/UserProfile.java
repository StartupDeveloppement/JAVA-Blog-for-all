package com.user.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.Date;

/**
 * Created by olivier on 26/11/2015.
 */
@Entity
@XmlRootElement
public class UserProfile {

    @Id
    @GeneratedValue
    private Integer id;
    @OneToOne
    private User user;
    private String firstname;
    private String lastname;
    private Date birthday;


    public Integer getId() {return id;}

    public User getUser() {return user;}
    public void setUser(User user) {this.user = user;}

    public String getFirstname() {return firstname;}
    public void setFirstname(String firstname) {this.firstname = firstname;}

    public String getLastname() {return lastname;}
    public void setLastname(String lastname) {this.lastname = lastname;}

    public Date getBirthday() {return birthday;}
    public void setBirthday(Date birthday) {this.birthday = birthday;}

}
