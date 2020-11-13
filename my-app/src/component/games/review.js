import React, { Component } from 'react'
import '../asset/css/category.css'
import Category from './category'
class Review extends Component{
    render(){
        return(
        <div className='Layout'>
            <div className='review'>
                <div className='review-title'>
                    GIỚI THIỆU GAME <span>RESIDENT EVIL <span1>RE</span1>SISTANCE</span> 
                </div>
                <div className='review-body'>
                    <p1>
                        Cốt truyện của Resident Evil: Resistance diễn ra vào sự kiện thảm họa Raccoon, khi một nhóm dân thường bị Umbrella “tiện tay” bắt về để làm vật mẫu thử nghiệm tại một phòng nghiên cứu NEST, nhằm phục vụ cho mục đích phát triển vũ khí sinh học. Cơ mà nói chung về cơ bản thì nó hoàn toàn là nhảm nhí, vì số lượng nhân vật cũng như tiến trình của game hoàn toàn chẳng liên quan gì tới các sự kiện chính cả, kiểu như là bịa ra cho có thì đúng hơn. 
                        <br></br><br></br>
                        Tất nhiên với một game dạng đối kháng thì điều này cũng chẳng có gì quan trọng, nếu có thể nói thì nó khá giống kết cấu của Resident Evil: Outbreak khi kể về những nhân vật ngoài lề không xuất hiện trong những phần game gốc. Thực tế thì khi Resident Evil: Resistance ra mắt demo giới thiệu nhiều người cũng liên tưởng ngay tới Outbreak khi 2 game này có quá nhiều điểm chung như: nhân vật có kỹ năng, phải trốn thoát trong thời gian cố định và chơi cùng đồng đội.
                    </p1>
                </div>
            </div>
                <Category></Category>
      </div>
          
        )
    }
}
export default Review;