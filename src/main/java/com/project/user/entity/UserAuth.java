package com.project.user.entity;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.List;

/**
 * Created by olivier on 19/12/2015.
 */
@Entity
@XmlRootElement
public class UserAuth implements java.io.Serializable{

    @Id
    private String email;
    private String password;
    private Boolean activate;
    @ManyToMany(fetch = FetchType.EAGER)
    private List<UserAuth> followingList;
    @ManyToMany(fetch = FetchType.EAGER)
    private List<UserAuth> followerList;

    public String getPassword() {return password;}
    public void setPassword(String password) {this.password = password;}

    public String getEmail() {return email;}
    public void setEmail(String email) {this.email = email;}

    public List<UserAuth> getFollowingList() {return followingList;}
    public void setFollowingList(List<UserAuth> followingList) {this.followingList = followingList;}

    public List<UserAuth> getFollowerList() {return followerList;}
    public void setFollowerList(List<UserAuth> followerList) {this.followerList = followerList;}

    public Boolean getActivate() {return activate;}
    public void setActivate(Boolean activate) {this.activate = activate;}

}
