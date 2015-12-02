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
        public ActionResult Index(Login Login)
        {
            return Login.Senha.Equals("admin") && Login.User.Equals("admin") ?
                   RedirectToAction("Listar") : RedirectToAction("Index");
        }

    }
}