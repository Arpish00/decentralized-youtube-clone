import axios from "axios";

const saveToIPFS = async (file) => {

    const formData  = new FormData();

    formData.append("file", file);

    var config = {
        method: "post",
        url: "https://api.web3.storage/upload",
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEZGMEU0OUQ5YzQyYTU3MTFENkY4OEVENTI0Yzg4RWFBOEE5ZDZCNjEiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzAxOTU4MDYxMjAsIm5hbWUiOiJ5b3R1YmUifQ.fRdgEzgGkBhF63r3ZuSAOfOg_eYstyy96TPpaX8aaio`,
          "Content-Type": "text/plain",
        },
        data: formData,
    };

    const response = await axios(config);

    return response.data.cid;

};

export default saveToIPFS;