package seb41_pre_32.back.exception.question;

import seb41_pre_32.back.exception.ErrorCode;
import seb41_pre_32.back.exception.ErrorLogicException;

public class QuestionNotFoundException extends ErrorLogicException {

    public QuestionNotFoundException() {
        super(ErrorCode.QUESTION_NOT_FOUND, "해당 질문은 존재하지 않습니다.");
    }
}
