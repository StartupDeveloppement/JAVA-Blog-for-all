package com.project.user.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * Created by olivier on 05/01/2016.
 */

@Entity
@XmlRootElement
public class UserParameters {

    @Id
    @GeneratedValue
    private Integer idUserParameters;
    @OneToOne
    private UserAuth user;
    private String language;
    private String country;
    private Boolean eMailWhenLikeContent;
    private Boolean eMailWhenFollow;
    private Boolean eMailWhenNewMessage;


    public Integer getIdUserParameters() {return idUserParameters;}

    public UserAuth getUser() {return user;}
    public void setUser(UserAuth user) {this.user = user;}

    public String getLanguage() {return language;}
    public void setLanguage(String language) {this.language = language;}

    public String getCountry() {return country;}
    public void setCountry(String country) {this.country = country;}

    public Boolean geteMailWhenLikeContent() {return eMailWhenLikeContent;}
    public void seteMailWhenLikeContent(Boolean eMailWhenLikeContent) {this.eMailWhenLikeContent = eMailWhenLikeContent;}

    public Boolean geteMailWhenFollow() {return eMailWhenFollow;}
    public void seteMailWhenFollow(Boolean eMailWhenFollow) {this.eMailWhenFollow = eMailWhenFollow;}

    public Boolean geteMailWhenNewMessage() {return eMailWhenNewMessage;}
    public void seteMailWhenNewMessage(Boolean eMailWhenNewMessage) {this.eMailWhenNewMessage = eMailWhenNewMessage;}

}
