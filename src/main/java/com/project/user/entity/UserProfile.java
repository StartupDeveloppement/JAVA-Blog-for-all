package com.project.user.entity;

import com.project.articles.entity.Article;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.Date;
import java.util.List;

/**
 * Created by olivier on 26/11/2015.
 */
@Entity
@XmlRootElement
public class UserProfile implements java.io.Serializable {

    @Id
    @GeneratedValue
    private Integer idUserProfile;
    @OneToOne
    private UserAuth user;
    private String firstname;
    private String lastname;
    @Temporal(TemporalType.DATE)
    private Date birthday;
    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy="userProfile")
    private List<Article> articleList;


    public Integer getIdUserProfile() {return idUserProfile;}

    public UserAuth getUser() {return user;}
    public void setUser(UserAuth user) {this.user = user;}

    public String getFirstname() {return firstname;}
    public void setFirstname(String firstname) {this.firstname = firstname;}

    public String getLastname() {return lastname;}
    public void setLastname(String lastname) {this.lastname = lastname;}

    public Date getBirthday() {return birthday;}
    public void setBirthday(Date birthday) {this.birthday = birthday;}

}
