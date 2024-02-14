import java.io.BufferedReader;
import java.io.FileReader;
import java.io.File;
import java.io.IOException;

public class prac {
    public static void main(String args[]) {
        File file = new File("demo.txt");

        try (BufferedReader br = new BufferedReader(new FileReader(file))) {
            String st;
            int i = 1;

            while (i <= 21771) {
                st = br.readLine();
                if(i)
                System.out.println(st);
                i++;
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
