package seb41_pre_32.back.exception.answer;

import seb41_pre_32.back.exception.ErrorCode;
import seb41_pre_32.back.exception.ErrorLogicException;

public class AnswerNotFoundException extends ErrorLogicException {

    public AnswerNotFoundException() {
        super(ErrorCode.ANSWER_NOT_FOUND, "해당 답변이 존재하지 않습니다.");
    }
}
