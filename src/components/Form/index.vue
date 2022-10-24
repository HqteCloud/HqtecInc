<script setup>
import { reactive, ref, watch } from 'vue'
import Item from './Item.vue';
import html2pdf from "html2pdf.js";
import emailjs from '@emailjs/browser'
import Success from './Success.vue'

const props = defineProps(["form"])
const open = ref(false)
const formError = reactive({
    condition: false,
    value: 'Submit'
})
const status = ref(false);

emailjs.init("Aj5-7omZWd5QrBR_Q");

const downloadPdf = () => new Promise((resolve, reject) => {
    const element = document.getElementById('form-information');
    // html2pdf().from(element).set({ filename: `New form submitted - ${new Date().toDateString()}` }).save();
    html2pdf().from(element).toPdf().outputPdf('datauristring').then(response => {
        function dataURItoBlob(dataURI) {
            // convert base64/URLEncoded data component to raw binary data held in a string
            var byteString;
            if (dataURI.split(',')[0].indexOf('base64') >= 0)
                byteString = atob(dataURI.split(',')[1]);
            else
                byteString = unescape(dataURI.split(',')[1]);

            // separate out the mime component
            var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

            // write the bytes of the string to a typed array
            var ia = new Uint8Array(byteString.length);
            for (var i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }

            return new Blob([ia], {type:mimeString});
        }
        const newPdf = new File([dataURItoBlob(response)], `new Form${new Date().toDateString()}.pdf`, {
            type: 'application/pdf',
            lastModified: new Date(),
        });

        const fileInput = document.forms["form-information"].elements["pdf"];
        const dataTransfer = new DataTransfer();
        
        dataTransfer.items.add(newPdf);
        fileInput.files = dataTransfer.files;
        resolve()
    })
})

const isEveryInputEmpty = () => {
    var inputs = document.querySelectorAll('input[type=text], input[type=email], textarea')
    var checkbox = document.querySelectorAll('input[type=checkbox]')
    for (let index = 0; index < inputs.length; index++) {
        // const element = array[index];
        console.log(inputs[index].value)
        if (inputs[index].value === '') {
            for (let index = 0; index < checkbox.length; index++) {
                if (!checkbox[index].checked) {
                    checkbox[checkbox.length - 1].checked = true;
                }
            }
            formError.condition = true;
            formError.value = 'All fields are required';
            throw new Error('All fields are required')
        }
    }
    return
    
}

const sendEmail = () => {
    try {
        isEveryInputEmpty();
        downloadPdf().then(() => {
            emailjs.sendForm("form-bot","template_10embfb", "#form-information")
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                status.value = true;
            },
            (err) => { console.log('FAILED...', err); });
        }).catch(err => console.log('FAILED...', err))
    } catch (error) {
        console.error('FAILED...', error.message);
    }   
}

watch(formError, () => {
    setTimeout(() => {
        formError.condition = false;
        formError.value = 'Submit'
    }, 2000)
})

watch(status, () => {
    setTimeout(() => {
        status.value = false;
        open.value = false;
    }, 2000)
})

const pathname = document.location.pathname;
console.log(document.location.pathname)

</script>

<template>
  <div class="button-group" v-if="pathname !== '/hqtec-cloud'">
    <a class="button" href="javascript:0" @click="open = true">Get Started</a>
  </div>

  <Teleport to="body">
    <div v-if="open" class="modal align-center" :class="{ start: status === false }">
        <div class="body" :class="{ error: formError.condition }" v-if="status === false">
            <div class="content">
               <p>Thank you for considering a relationship with Jeremi Technology Solutions for general services. Please fill out the spaces below and provide a detailed description of what you would like to accomplish. Additionally, you can use the message box for any questions or concerns you may have about projects, services, and pricing. Please allow up to 48 hours for a response. <br> <br> All fields marked with " * " are required</p>
            </div>
            
            <form id="form-information" @submit.prevent="sendEmail()">
                <div class="group">
                    <h3>Name *</h3>
                    <div class="wrapper">
                        <div class="input-box">
                            <label for="firstName">First Name</label>
                            <input type="text" name="firstName">
                            <p></p>
                        </div>
                        <div class="input-box">
                            <label for="lastName">Last Name</label>
                            <input type="text" name="lastName">
                            <p></p>
                        </div>
                    </div>
                </div>
                <div class="input-box">
                    <label for="Email">Email Address *</label>
                    <input type="email" name="email">
                    <p></p>
                </div>
                <Item 
                    v-for="{ type, field, placeholder, extra, fields } in props.form.fields"
                    :type="type"
                    :title="field"
                    :extra="extra"
                    :placeholder="placeholder"
                    :groupArray="fields"
                />

                <div class="group">
                    <h3>Assignment(s) *</h3>
                    <p>Please select all that apply</p>
                    <div class="checkboxes" style="margin-top: 1em">
                        <div class="input-box checkbox" v-for="title in props.form.checkbox">
                            <input type="checkbox">
                            <label :for="title"><small>{{ title }}</small></label>
                        </div>
                    </div>
                </div>

                <div class="input-box">
                    <label for="messageSubject">Subject *</label>
                    <input type="text" name="subject">
                    <p></p>
                </div>
                <div class="input-box">
                    <label for="textArea">Message *</label>
                    <textarea name="message"></textarea>
                    <p></p>
                </div>
                <input type="file" name="pdf" style="visibility:hidden">
                <button type="submit" :class="{ error: formError.condition }">{{ formError.value }}</button>
                <button @click="open = false">Close</button>
            </form>
        </div>
        <Success v-if="status"/>
    </div>
</Teleport>
</template>

<style lang="scss" scoped>
@import "../../styles/global.styles.scss";
@import "../../styles/breakpoints.scss";
.modal {
    position: fixed;
    z-index: 1;
    top: 0;
    width: 100%;
    height: 100vh;

    background: rgba(0, 0, 0, 0.445);

    display: flex;
    justify-content: center;
    overflow-y: auto;
    .body {
        background: var(--background);
        margin: $gap 1.3em; width: 100%;
        min-height: 80%; border: 1px solid var(--border);
        border-radius: $radius; max-width: 800px;
        .content {
            padding: 1.3em;
            border-bottom: 1px solid var(--border);

            @include mb-landscape {
                padding: $gap;
            }
        }
        @include mb-landscape {
            margin: $gap-large $gap;
        }
        form {
            padding: 1.3em;
            @include mb-landscape {
                padding: $gap;
            }
        }
    }
}
.button-group { margin: $gap 0; }
.button {
    padding: 1em $gap;
    border: 1px solid var(--border);
    border-radius: $gap-large;
    margin-right: 1em;

    &:hover { cursor: pointer;}
    &:focus {outline: .2em solid var(--brand);}
}
.error {
    transition: all 0.5s;
    border: 1px solid red !important;
}
.start { align-items: flex-start; }
form {
    background: var(--background);
}
</style>