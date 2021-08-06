//
//  ViewController.swift
//  iOSApp
//
//  Created by Aditi Agrawal on 06/08/21.
//

import UIKit
import WebKit

class ViewController: UIViewController {
    
    @IBOutlet weak var webView: WKWebView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        // Do any additional setup after loading the view.
        
        if let url = URL(string: "https://aditi3.github.io/demo-web-sdk/#/") {
            let request = URLRequest(url: url)
            webView?.load(request)
        }
    }
}

