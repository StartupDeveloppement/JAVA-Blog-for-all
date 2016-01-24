package com.project.user.dto;

import javax.xml.bind.annotation.XmlRootElement;

/**
 * Created by olivier on 26/11/2015.
 */
@XmlRootElement
public class TokenUtilsDto {

    private String s;
    private String sp;

    public String getS() {return s;}
    public void setS(String s) {this.s = s;}

    public String getSp() {return sp;}
    public void setSp(String sp) {this.sp = sp;}

}
