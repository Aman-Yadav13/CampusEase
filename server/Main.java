import java.util.ArrayList;
import java.util.Scanner;
public class Main {
    public static <T> void replaceItem(ArrayList<T> list, T oldItem, T newItem) {
        
        for (int i = 0; i < list.size(); i++) {
            T current = list.get(i);
            if (oldItem == null && current == null) {
                list.set(i, newItem);
            } else if (oldItem != null && oldItem.equals(current)) {
                list.set(i, newItem);
            }
        }
        System.out.print("[");
        for(int i=0;i<list.size();i++){
            if(i!=list.size()-1){
                System.out.print(list.get(i)+", ");
            }else{
                       System.out.print(list.get(i)+"]");

            }
        }
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        ArrayList<String> strList = new ArrayList<String>();
        ArrayList<Integer> intList = new ArrayList<Integer>();
        System.out.println("Number of integer items to add:");
        int noint = sc.nextInt();
        System.out.println(noint);
        System.out.println("Enter the "+noint+ " items");
        for(int i=0;i<noint;i++){
            int j = sc.nextInt();
            intList.add(j);
        }
        
        for(int i=0;i<noint;i++){
            System.out.println(intList.get(i));
        }
        System.out.println("Original Integer ArrayList:");
        System.out.print("[");
        for(int i=0;i<noint;i++){
            if(i!=noint-1){
                System.out.print(intList.get(i)+", ");
            }else{
                System.out.print(intList.get(i)+"]");
            }
        }
        System.out.println("Updated Integer ArrayList:");
        replaceItem(intList,56,65);
        
        int nostr = sc.nextInt();
        System.out.println(nostr);
        System.out.println("Enter the "+nostr+ " items");
        for(int i=0;i<=nostr;i++){
            String j = sc.nextLine();
            if(i!=0){
            strList.add(j);
            }
        }
        
        for(int i=0;i<strList.size();i++){
            System.out.println(strList.get(i));
        }
        System.out.println("Original String ArrayList:");
        System.out.print("[");
        for(int i=0;i<strList.size();i++){
            if(i!=strList.size()-1){
                System.out.print(strList.get(i)+", ");
            }else{
                System.out.print(strList.get(i)+"]");
            }
        }
        System.out.println("Updated String ArrayList:");
        replaceItem(strList,"karnataka","delhi");
        sc.close();
    }
}