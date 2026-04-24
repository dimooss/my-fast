// این یک تابع سرورلس (Serverless Function) ساده برای Vercel است
export default async function handler(req, res) {
  const url = req.query.url;
  
  // اگر آدرس سایت مشخص نشده بود، خطا بده
  if (!url) {
    return res.status(400).send('لطفاً یک آدرس به این شکل وارد کنید: ?url=example.com');
  }

  try {
    // درخواست را به سایت مورد نظر ارسال می‌کنیم
    const response = await fetch(url);
    const data = await response.text();
    
    // محتوای سایت را به عنوان خروجی برمی‌گردانیم
    res.setHeader('Content-Type', response.headers.get('Content-Type'));
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send('خطا در اتصال به سایت مورد نظر');
  }
}
