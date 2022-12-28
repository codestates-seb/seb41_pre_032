package seb41_pre_32.back.logging;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.CodeSignature;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Aspect
@Component
@Slf4j
public class LogAspect {

    private static final ObjectMapper objectMapper = new ObjectMapper();

    @Pointcut("execution(public * seb41_pre_32.back.*.controller.*Controller.*(..))")
    private void targetPointCut() {
    }

    @Before("targetPointCut()")
    public void requestLog(final JoinPoint joinPoint) {
        CodeSignature signature = (CodeSignature) joinPoint.getSignature();
        Map<String, Object> paramMap = extractParameters(joinPoint, signature);

        try {
            log.info("============= [REQUEST] Controller: {},  Method: {}, Arguments: {} =============",
                    joinPoint.getTarget().getClass().getSimpleName(), signature.getName(),
                    objectMapper.writeValueAsString(paramMap));
        } catch (JsonProcessingException e) {
            log.warn("logging error");
        }
    }

    private Map<String, Object> extractParameters(JoinPoint joinPoint, CodeSignature signature) {
        String[] parameterNames = signature.getParameterNames();

        Map<String, Object> paramMap = new HashMap<>();

        int i = 0;
        for (String parameterName : parameterNames) {
            paramMap.put(parameterName, joinPoint.getArgs()[i++]);
        }

        return paramMap;
    }
}
