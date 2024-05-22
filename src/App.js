import { useRef, useState } from "react";

function App() {
  const textarea_encrypt_ref = useRef();
  const textarea_decrypt_ref = useRef();
  const input_encrypt_doc = useRef();
  const input_decrypt_doc = useRef();

  const handleUploadEncryptFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        textarea_encrypt_ref.current.value = e.target.result;
      };
      reader.readAsText(file);
    }
  };
  const handleUploadDecryptFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        textarea_decrypt_ref.current.value = e.target.result;
      };
      reader.readAsText(file);
    }
  };
  return (
    <>
      <div className="container">
        <h2 class=" font-bold  uppercase mb-[20px] text-center text-[20px] mt-[20px]">
          Hệ mã hóa ESA
        </h2>
        <div className="px-[80px] mb-[30px]">
          <div class="px-3 bg-[#F3CA52] inline-block rounded-[8px] text-white cursor-pointer py-2 generate_btn hover:translate-y-[-3px] transition  duration-300 ease-linear">
            generate key
          </div>
        </div>
        <div class="wrapper flex ">
          <div class="left flex_50 px-[80px]">
            <div class="title uppercase ml-[20px] mb-[40px] text-center">
              mã hóa
            </div>

            <div class="flex  justify-between">
              <div class="flex_20">bản rõ : </div>
              <div class="flex_80">
                <form>
                  <div class="flex  gap-3 ">
                    <label class="flex gap-3 w-full items-start">
                      {/* <input
                        type="text"
                        class="w-full h-[200px] border border-solid border-black x_content "
                      /> */}
                      <textarea
                        ref={textarea_encrypt_ref}
                        rows="8"
                        cols="50"
                        className="border border-solid border-black"
                      ></textarea>
                      <input
                        type="file"
                        class="input_x_select hidden"
                        name="file"
                        ref={input_encrypt_doc}
                        onChange={handleUploadEncryptFile}
                      />
                      <div
                        class="py-[10px] px-[20px] bg-[#074173] text-white rounded-[8px] select_x cursor-pointer "
                        onClick={() => {
                          input_encrypt_doc.current.click();
                        }}
                      >
                        File
                      </div>
                    </label>
                  </div>
                  <div class="btn mt-[30px] encrypt_btn inline-block cursor-pointer">
                    Mã hóa
                  </div>
                </form>
              </div>
            </div>
            <div class="flex  justify-between mt-[100px]">
              <div class="flex_20">bản mã : </div>
              <div class="flex_80">
                <form>
                  <div class="flex  gap-3 ">
                    <input
                      type="text"
                      class="w-full h-[50px] border border-solid border-black encrypt_result inline-block "
                    />
                    <div class="btn transmit_btn inline-block cursor-pointer">
                      Chuyển
                    </div>
                  </div>
                  <button class="btn mt-[30px]">Lưu file </button>
                </form>
              </div>
            </div>
          </div>
          <div class="w-[2px] h-[80vh] rounded-[4px] bg-[#000] my-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
          <div class="right flex_50 px-[80px]">
            <div class="title uppercase ml-[20px] mb-[40px] text-center">
              giải mã
            </div>
            <div class="flex  justify-between">
              <div class="flex_20">bản mã : </div>
              <div class="flex_80">
                <form>
                  <div class="flex items-start  gap-3 ">
                    <textarea
                      rows="8"
                      cols="50"
                      className="border border-solid border-black"
                      ref={textarea_decrypt_ref}
                    ></textarea>
                    <input
                      type="file"
                      class="input_x_select hidden"
                      name="file"
                      ref={input_decrypt_doc}
                      onChange={handleUploadDecryptFile}
                    />
                    <div
                      class="py-[10px] px-[20px] bg-[#074173] text-white rounded-[8px] select_x cursor-pointer "
                      onClick={() => {
                        input_decrypt_doc.current.click();
                      }}
                    >
                      File
                    </div>
                  </div>
                  <button class="btn mt-[30px]">giải mã</button>
                </form>
              </div>
            </div>
            <div class="flex  justify-between mt-[100px]">
              <div class="flex_20">bản rõ : </div>
              <div class="flex_80">
                <form>
                  <div class="flex  gap-3 ">
                    <input
                      type="text"
                      class="w-full h-[50px] border border-solid border-black"
                    />
                    <button class="btn ">Lưu</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
