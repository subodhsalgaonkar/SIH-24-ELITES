import { Schema, model } from 'mongoose'

const FarmerSchema = new Schema({

    Farmer_name: {
        type: String,
        maxlength: 100,
        required: true
    },
    farm_name: {
        type: String,
        maxlength: 50
    },
    image: {
        type: String // Assuming the image URL is stored as a string
    },
    personal_info: {
        type: String
    },
    address: {
        type: String,
        maxlength: 255
    },
    verification_status: {
        type: Boolean,
        default: false
    },
    methods_used: {
        type: String
    },
    experience: {
        type: String,
        maxlength: 10
    },
    email: {
        type: String,
        maxlength: 50,
        unique: true
    },
    contact: {
        type: String,
        required: true,
        unique: true,
        maxlength: 100
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        maxlength: 50,
        unique: true,
        required: true
    }
});

const BuyerSchema = new Schema({
    buyer_id: {
        type: Schema.Types.ObjectId,
        auto: true
    },
    name: {
        type: String,
        maxlength: 100,
        required: true
    },
    preferred_products: {
        type: String // 'text' corresponds to 'String' in Mongoose
    },
    image: {
        type: String // Assuming the image URL is stored as a string
    },
    company: {
        type: String
    },
    address: {
        type: String,
        maxlength: 255
    },
    verification_status: {
        type: Boolean,
        default: false
    },
    description: {
        type: String
    },
    email: {
        type: String,
        maxlength: 50,
        required: true,
        unique: true
    },
    contact: {
        type: String,
        maxlength: 100
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        maxlength: 50,
        unique: true,
        required: true
    }
});

const ContractSchema = new Schema({
    contract_id: {
        type: Schema.Types.ObjectId,
        auto: true
    },
    quantity: {
        type: Number, // 'long int()' corresponds to 'Number' in Mongoose
        required: true
    },
    status: {
        type: Boolean,
        default: false
    },
    duration: {
        type: Date,
        required: true
    },
    verification_status: {
        type: Boolean,
        default: false
    },
    digital_sign_farmer: {
        type: String // Assuming the digital signature URL is stored as a string
    },
    digital_sign_buyer: {
        type: String // Assuming the digital signature URL is stored as a string
    },
    delivery_date: {
        type: Date
    }
});

const CropSchema = new Schema({
    crop_id: {
        type: Schema.Types.ObjectId,
        auto: true
    },
    name: {
        type: String,
        maxlength: 100,
        required: true
    },
    farmer_id: {
        type: String,
        maxlength: 50,
        required: true
    },
    phase: {
        type: String
    },
    quantity: {
        type: Number, // 'long int()' corresponds to 'Number' in Mongoose
        required: true
    },
    image: {
        type: String // Assuming the image URL is stored as a string
    },
    set_to_marketplace: {
        type: Boolean,
        default: false
    },
    crop_desc: {
        type: String // 'text' corresponds to 'String' in Mongoose
    },
    time_to_deliver: {
        type: Date,
        required: true
    }
});

const ReviewSchema = new Schema({
    from: {
        type: String,  // sender id
        required: true
    },
    to: {
        type: String,  // receiver id
        required: true
    },
    rating: {
        type: Number,  // corresponds to 'float' in SQL
        required: true,
        min: 0,
        max: 5
    },
    review_text: {
        type: String  // corresponds to 'text' in SQL
    }
});

const MessageSchema = new Schema({
    from: {
        type: String,  // sender id
        maxlength: 50,
        required: true
    },
    to: {
        type: String,  // receiver id
        maxlength: 50,
        required: true
    },
    crop_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    message: {
        type: String,  // corresponds to 'text' in SQL
        required: true
    },
    status: {
        type: Boolean,
        default: false
    },
    type: {
        type: String,
        maxlength: 20,
        enum: ['negotiation', 'contract'], // Only allows 'negotiation' or 'contract'
        required: true
    }
});

const DocumentSchema = new Schema({
    document_url: {
        type: String, // Assuming the document URL is stored as a string
        required: true
    },
    document_id: {
        type: Schema.Types.ObjectId,
        auto: true
    },
    verification_status: {
        type: Boolean,
        default: false
    },
    associated_id: {
        type: Schema.Types.ObjectId,
        required: true
    }
});

const AdminSchema = new Schema({
    gov_admin_id: {
        type: Schema.Types.ObjectId,
        auto: true
    },
    buyer_id: {
        type: Schema.Types.ObjectId
    },
    farmer_id: {
        type: Schema.Types.ObjectId
    },
    contract_id: {
        type: Schema.Types.ObjectId
    },
    document_id: {
        type: Schema.Types.ObjectId
    },
    username: {
        type: String,
        maxlength: 60,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const Admin = model('Admin', AdminSchema);
const Document = model('Document', DocumentSchema);
const Message = model('Message', MessageSchema);
const Review = model('Review', ReviewSchema);
const Crop = model('Crop', CropSchema);
const Contract = model('Contract', ContractSchema);
const Buyer = model('Buyer', BuyerSchema);
const Farmer = model('Farmer', FarmerSchema);

export { Buyer, Farmer, Contract, Crop, Review, Message, Document, Admin };
