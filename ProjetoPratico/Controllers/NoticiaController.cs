using ProjetoPratico.Models;
using System.Web.Mvc;
namespace ProjetoPratico.Controllers
{
    [RoutePrefix("Noticia")]
    public class NoticiaController : Controller
    {
        private _DbContext banco;

        [HttpGet]
        public ActionResult Index()
        {            
            return View();
        }
        [HttpPost]
        public JsonResult Index(Login Login)
        {
            if (ModelState.IsValid)
            {
                return Json(new { result = "Deu Tudo Certo" }, JsonRequestBehavior.AllowGet);
            }
            return Json(new { result = "Deu Erro" }, JsonRequestBehavior.AllowGet);
        }
    }
}