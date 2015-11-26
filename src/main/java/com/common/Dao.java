package com.common;

/**
 * Created by olivier on 20/11/15.
 */
public interface Dao<T, PK> {

    public boolean create(T obj);
    public T read(PK id);
    public void update(T obj);
    public void delete(T obj);

}
