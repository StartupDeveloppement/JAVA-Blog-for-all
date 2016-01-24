package com.project.user.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
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
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer idUserProfile;
    @OneToOne
    private UserAuth user;
    /*private String firstname;
    private String lastname;*/
    private String profileName;
    private String profilePicture;
    /*@Temporal(TemporalType.DATE)
    private Date birthday;*/
    @OneToMany(fetch = FetchType.EAGER, mappedBy="userProfile")
    //@JsonManagedReference
    private List<Article> articleList;
    /*private String language;
    private String country;
    private Boolean eMailWhenLikeContent;
    private Boolean eMailWhenFollow;
    private Boolean eMailWhenNewMessage;*/



    public Integer getIdUserProfile() {return idUserProfile;}

    public UserAuth getUser() {return user;}
    public void setUser(UserAuth user) {this.user = user;}

    /*public String getFirstname() {return firstname;}
    public void setFirstname(String firstname) {this.firstname = firstname;}

    public String getLastname() {return lastname;}
    public void setLastname(String lastname) {this.lastname = lastname;}*/

    public String getProfileName() {return profileName;}
    public void setProfileName(String profileName) {this.profileName = profileName;}

    public String getProfilePicture() {return profilePicture;}
    public void setProfilePicture(String profilePicture) {this.profilePicture = profilePicture;}

   /* public Date getBirthday() {return birthday;}
    public void setBirthday(Date birthday) {this.birthday = birthday;}*/

    public List<Article> getArticleList() {return articleList;}
    public void setArticleList(List<Article> articleList) {this.articleList = articleList;}

    /*public String getLanguage() {return language;}
    public void setLanguage(String language) {this.language = language;}

    public String getCountry() {return country;}
    public void setCountry(String country) {this.country = country;}

    public Boolean geteMailWhenLikeContent() {return eMailWhenLikeContent;}
    public void seteMailWhenLikeContent(Boolean eMailWhenLikeContent) {this.eMailWhenLikeContent = eMailWhenLikeContent;}

    public Boolean geteMailWhenFollow() {return eMailWhenFollow;}
    public void seteMailWhenFollow(Boolean eMailWhenFollow) {this.eMailWhenFollow = eMailWhenFollow;}

    public Boolean geteMailWhenNewMessage() {return eMailWhenNewMessage;}
    public void seteMailWhenNewMessage(Boolean eMailWhenNewMessage) {this.eMailWhenNewMessage = eMailWhenNewMessage;}*/


}
