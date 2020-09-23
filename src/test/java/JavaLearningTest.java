import com.timhan.springboot.web.dto.HelloResponseDto;
import org.junit.Test;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import static org.assertj.core.api.Assertions.assertThat;

public class JavaLearningTest {

    @Test
    public void test_stream_range() {
        List<String> fizzBuzz = IntStream.rangeClosed(1, Integer.parseInt("15"))
                .mapToObj(i -> mapFizzBuzz(i))
                .collect(Collectors.toList());

        System.out.println(fizzBuzz);
    }

    private String mapFizzBuzz(int i ) {
        StringBuilder sb = new StringBuilder();

        if (i % 3 == 0) {
            sb.append("Fizz");
        }

        if (i % 5 == 0) {
            sb.append("Buzz");
        }

        if (sb.length() == 0) {
            sb.append(i);
        }

        return sb.toString();
    }

    @Test
    public void lombok_test() {
        String name = "test";
        int amount = 1000;

        HelloResponseDto dto = new HelloResponseDto(name, amount);

        assertThat(dto.getName()).isEqualTo(name);
        assertThat(dto.getAmount()).isEqualTo(amount);
    }
}
