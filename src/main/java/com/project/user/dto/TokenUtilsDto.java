package com.project.user.dto;

import javax.xml.bind.annotation.XmlRootElement;

/**
 * Created by olivier on 26/11/2015.
 */
@XmlRootElement
public class TokenUtilsDto {

    private String s;
    private String sp;
    private String sprofile;
    private String sparameters;

    public String getS() {return s;}
    public void setS(String s) {this.s = s;}

    public String getSp() {return sp;}
    public void setSp(String sp) {this.sp = sp;}

    public String getSprofile() {return sprofile;}
    public void setSprofile(String sprofile) {this.sprofile = sprofile;}

    public String getSparameters() {return sparameters;}
    public void setSparameters(String sparameters) {this.sparameters = sparameters;}
}
