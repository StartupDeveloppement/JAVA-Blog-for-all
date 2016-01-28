package com.project.user.dto;

import com.project.user.entity.UserParameters;
import com.project.user.entity.UserProfile;

import javax.xml.bind.annotation.XmlRootElement;

/**
 * Created by olivier on 05/01/2016.
 */
@XmlRootElement
public class UserProfileResponseDto {

    //from userProfile entity
    private String profileName;
    private String profilePicture;
    private String status;
    //private String facebook;
    //private String twitter;
    //private String pinterest;
    private String universityName;
    private String universityCity;
    //private String workName;
    //private String workCity;

    //from userParameter entity
    //private String language;
    //private String country;
    //private Boolean eMailWhenLikeContent;
    //private Boolean eMailWhenFollow;
    //private Boolean eMailWhenNewMessage;


    public String getProfileName() {return profileName;}
    public void setProfileName(String profileName) {this.profileName = profileName;}

    public String getProfilePicture() {return profilePicture;}
    public void setProfilePicture(String profilePicture) {this.profilePicture = profilePicture;}

    public String getStatus() {return status;}
    public void setStatus(String status) {this.status = status;}

    /*public String getFacebook() {return facebook;}
    public void setFacebook(String facebook) {this.facebook = facebook;}

    public String getTwitter() {return twitter;}
    public void setTwitter(String twitter) {this.twitter = twitter;}

    public String getPinterest() {return pinterest;}
    public void setPinterest(String pinterest) {this.pinterest = pinterest;}*/

    public String getUniversityName() {return universityName;}
    public void setUniversityName(String universityName) {this.universityName = universityName;}

    public String getUniversityCity() {return universityCity;}
    public void setUniversityCity(String universityCity) {this.universityCity = universityCity;}

    /*public String getWorkName() {return workName;}
    public void setWorkName(String workName) {this.workName = workName;}

    public String getWorkCity() {return workCity;}
    public void setWorkCity(String workCity) {this.workCity = workCity;}

    public String getLanguage() {return language;}
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
