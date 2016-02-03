package com.project.articles.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.project.user.entity.UserProfile;

import javax.persistence.*;

/**
 * Created by olivier on 31/01/2016.
 */
@Entity
public class ArticleSection implements java.io.Serializable{

    @Id
    @GeneratedValue
    private String idSection;
    private String sectionName;
    @ManyToOne(fetch = FetchType.LAZY)
    @JsonBackReference
    private UserProfile userProfile;

    public String getIdSection() {return idSection;}

    public String getSectionName() {return sectionName;}
    public void setSectionName(String sectionName) {this.sectionName = sectionName;}

    public UserProfile getUserProfile() {return userProfile;}
    public void setUserProfile(UserProfile userProfile) {this.userProfile = userProfile;}

}
