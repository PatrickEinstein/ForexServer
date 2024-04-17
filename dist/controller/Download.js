const DownloadFile = (req, res) => {
    try {
        res.setHeader('Content-Disposition', 'attachment; filename="Template.csv"');
        res.setHeader('Content-Type', 'text/csv');
        res.sendFile("C:\\Users\\MY LAPTOP\\Desktop\\Nimbs - TS\\src\\Downloads\\Template.csv");
        //  res.sendFile("C:\\Users\\pmohammed\\Desktop\\NIMBS\\src\\Downloads\\Template.csv");
    }
    catch (e) {
        console.error("Error occurred while sending the file:", e);
        res.status(500).send("Internal Server Error");
    }
};
export default DownloadFile;
