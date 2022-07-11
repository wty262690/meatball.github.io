/**
 * ArrayQueue (v1.1.1)
 * GoToLoop (2020/Apr/20)
 * https://Discourse.Processing.org/t/linkedlist-vs-arraylist/19946/14
 */

//package java.util; // Uncomment this line if this is a ".java" file

import java.util.Collection;
import java.util.Queue;
import java.util.List;
import java.util.ArrayList;
import java.util.Iterator;
import java.io.Serializable;

static // Comment this out if this is a ".java" file
  public class ArrayQueue<E> implements Queue<E>, Cloneable, Serializable {

  //static final long serialVersionUID = 8_779_387_929_858_209_947L;
  static final long serialVersionUID = 779_387_929;

  protected final List<E> list;

  public ArrayQueue() {
    list = new ArrayList<E>();
  }

  public ArrayQueue(final int initialCapacity) { // Ignored by Pjs
    list = new ArrayList<E>(initialCapacity);
  }

  public ArrayQueue(final Collection<? extends E> c) {
    list = new ArrayList<E>(c);
  }

  public void clear() {
    list.clear();
  }

  public int size() {
    return list.size();
  }

  public boolean isEmpty() {
    return list.isEmpty();
  }

  public boolean offer(final E e) {
    return add(e);
  }

  public boolean add(final E e) { // No return (void) on Pjs
    return list.add(e);
  }

  public E peek() {
    return isEmpty()? null : element();
  }

  public E element() {
    return list.get(0);
  }

  public E poll() {
    return isEmpty()? null : remove();
  }

  public E remove() {
    return list.remove(0);
  }

  public boolean remove(final Object o) {
    return list.remove(o);
  }

  public boolean removeAll(final Collection<?> c) {
    return list.removeAll(c);
  }

  public boolean addAll(final Collection<? extends E> c) { // void on Pjs
    return list.addAll(c);
  }

  public boolean retainAll(final Collection<?> c) { // Undefined on Pjs
    return list.retainAll(c);
  }

  public boolean containsAll(final Collection<?> c) { // Undefined on Pjs
    return list.containsAll(c);
  }

  public boolean contains(final Object o) {
    return list.contains(o);
  }

  public Object[] toArray() {
    return list.toArray();
  }

  public <T> T[] toArray(final T[] a) { // Parameter ignored by Pjs
    return list.toArray(a);
  }

  public Iterator<E> iterator() {
    return list.iterator();
  }

  public ArrayQueue<E> clone() {
    return new ArrayQueue<E>(list);
  }

  public String toString() { // Undefined on Pjs
    return list.toString();
  }
}