package com.project.articles.entity;

import org.codehaus.jackson.annotate.JsonIgnore;
import org.codehaus.jackson.annotate.JsonIgnoreProperties;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by olivier on 20/12/2015.
 */
@Entity
@XmlRootElement
public class ArticleKeyWord implements java.io.Serializable{

    @Id
    @GeneratedValue
    private Integer idKeyWord;
    private String label;
    /*@ManyToMany(fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Article> articleList = new ArrayList<Article>();*/


    public Integer getIdKeyWord() {return idKeyWord;}

    public String getLabel() {return label;}
    public void setLabel(String label) {this.label = label;}

}
