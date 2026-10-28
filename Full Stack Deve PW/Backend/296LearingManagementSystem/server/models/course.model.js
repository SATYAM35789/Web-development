import {model , Schema} from 'mongoose'

const courseSchema = new Schema({
    title:{
        type: String,
        required : [true, 'Title is required'],
        minLength : [8 , 'Title must be atleat 8 characters'],
        maxLength : [60 , 'Title should be less than 60 character'],
        trim : true,
    },
    description : {
        type : String,
        required : [true, 'Discription  is required'],
        minLength : [8 , 'Discription must be atleat 8 characters'],
        maxLength : [200 , 'Discription should be less than 60 character'],
    },
    category : {
        type : String,
        required : [true, 'Category  is required'],
    },
    thumbnail: {
        public_id : {
            type : String,
            required : true, 
        },
        secure_url : {
           type : String,
           required : true,
        }        
    },
    lectures : [
        {
            title : String,
            description : String,
            lectures: {  // thumnails se related info
                public_id : {
                    type : String,
                    required : true,
                },
                secure_url : {
                    type : String,
                    required : true,
                }

            }
        },

    ],
    numberOfLectures : {
           type : Number,
           default : 0 ,
    },
    createdBy : {
        type: String,
        required : true,
    },
    
},{
    timeseries : true
})

const Course = model('Course',courseSchema)

export default Course