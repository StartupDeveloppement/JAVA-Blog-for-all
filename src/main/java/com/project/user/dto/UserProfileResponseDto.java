package com.project.user.dto;

import com.project.user.entity.UserParameters;
import com.project.user.entity.UserProfile;

import javax.xml.bind.annotation.XmlRootElement;

/**
 * Created by olivier on 05/01/2016.
 */
@XmlRootElement
public class UserProfileResponseDto {

    private String token;
    private UserProfile userProfile;
    private UserParameters userParameters;

}
