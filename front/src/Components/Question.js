import styled from "styled-components"

const QuestionWrap = styled.li`

`

const Question = () => {
    return (
         <QuestionWrap>
            <div className="left">
                <div className="votesWrap">
                    <span>0</span>
                    <span>votes</span>
                </div>
                <div className="answersWrap">
                    <span>0</span>
                    <span>answers</span>
                </div>
                <div className="viewsWrap">
                    <span>0</span>
                    <span>views</span>
                </div>
            </div>
            <div className="right">
                <h3 className="content-title"><a href="/">Title</a></h3>
                <div>
                    <div>
                        <ul>
                            <li>Tags1</li>
                            <li>Tags2</li>
                        </ul>
                    </div>
                    <div><a href="/"><img alt="" src="/" />글쓴이사진</a></div>
                    <div><a href="/">글쓴이 이름</a></div>
                    <div><a href="/">날짜</a></div>
                </div>
              {/* 제목/태그/글쓴이사진/ 글쓴이이름/날짜/조회수*/}
            </div>
        </QuestionWrap>
    )
}

export default Question